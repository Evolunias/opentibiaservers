import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-enforced-server-europe');
}

export default function RubinotPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-enforced-server-europe" />;
}
