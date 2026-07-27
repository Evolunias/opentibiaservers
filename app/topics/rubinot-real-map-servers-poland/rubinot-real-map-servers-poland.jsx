import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-servers-poland');
}

export default function RubinotRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-servers-poland" />;
}
