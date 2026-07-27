import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-client-canada');
}

export default function CustomMapClientCanadaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-client-canada" />;
}
