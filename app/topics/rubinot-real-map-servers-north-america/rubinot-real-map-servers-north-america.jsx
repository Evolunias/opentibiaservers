import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-servers-north-america');
}

export default function RubinotRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-servers-north-america" />;
}
