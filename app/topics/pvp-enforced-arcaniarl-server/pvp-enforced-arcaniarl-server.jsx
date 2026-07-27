import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-arcaniarl-server');
}

export default function PvpEnforcedArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-arcaniarl-server" />;
}
