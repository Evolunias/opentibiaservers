import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-12-pvp-enforced-server');
}

export default function Arcaniarl12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-12-pvp-enforced-server" />;
}
