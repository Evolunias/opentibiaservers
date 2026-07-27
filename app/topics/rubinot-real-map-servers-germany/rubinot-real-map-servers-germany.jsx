import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-servers-germany');
}

export default function RubinotRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-servers-germany" />;
}
