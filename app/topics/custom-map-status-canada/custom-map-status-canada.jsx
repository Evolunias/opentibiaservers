import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-status-canada');
}

export default function CustomMapStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-status-canada" />;
}
