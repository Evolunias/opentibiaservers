import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-servers-argentina');
}

export default function RubinotRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-servers-argentina" />;
}
