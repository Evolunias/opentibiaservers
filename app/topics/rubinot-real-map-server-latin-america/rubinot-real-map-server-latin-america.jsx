import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-server-latin-america');
}

export default function RubinotRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-server-latin-america" />;
}
