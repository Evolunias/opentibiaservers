import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-yurots-server');
}

export default function PvpEnforcedYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-yurots-server" />;
}
