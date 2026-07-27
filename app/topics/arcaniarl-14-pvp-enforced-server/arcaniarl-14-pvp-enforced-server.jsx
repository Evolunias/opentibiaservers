import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-14-pvp-enforced-server');
}

export default function Arcaniarl14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-14-pvp-enforced-server" />;
}
