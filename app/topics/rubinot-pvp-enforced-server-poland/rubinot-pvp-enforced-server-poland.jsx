import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-enforced-server-poland');
}

export default function RubinotPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-enforced-server-poland" />;
}
