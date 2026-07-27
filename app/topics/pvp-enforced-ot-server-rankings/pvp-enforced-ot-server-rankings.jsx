import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-rankings');
}

export default function PvpEnforcedOtServerRankingsKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-rankings" />;
}
