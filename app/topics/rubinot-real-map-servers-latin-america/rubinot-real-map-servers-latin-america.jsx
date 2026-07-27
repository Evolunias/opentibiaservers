import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-servers-latin-america');
}

export default function RubinotRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-servers-latin-america" />;
}
