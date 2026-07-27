import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-status-usa');
}

export default function CustomMapStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-status-usa" />;
}
