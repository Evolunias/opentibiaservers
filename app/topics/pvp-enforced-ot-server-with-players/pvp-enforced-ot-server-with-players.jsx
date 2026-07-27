import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-with-players');
}

export default function PvpEnforcedOtServerWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-with-players" />;
}
