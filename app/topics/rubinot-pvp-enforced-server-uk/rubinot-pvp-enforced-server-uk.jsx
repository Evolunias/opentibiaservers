import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-enforced-server-uk');
}

export default function RubinotPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-enforced-server-uk" />;
}
