import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-servers-mexico');
}

export default function RubinotRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-servers-mexico" />;
}
