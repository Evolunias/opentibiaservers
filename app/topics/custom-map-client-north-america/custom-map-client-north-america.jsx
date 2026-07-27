import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-client-north-america');
}

export default function CustomMapClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-client-north-america" />;
}
