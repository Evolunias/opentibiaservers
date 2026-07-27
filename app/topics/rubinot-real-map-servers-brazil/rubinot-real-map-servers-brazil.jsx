import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-servers-brazil');
}

export default function RubinotRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-servers-brazil" />;
}
