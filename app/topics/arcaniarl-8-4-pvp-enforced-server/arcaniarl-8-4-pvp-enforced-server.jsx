import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-4-pvp-enforced-server');
}

export default function Arcaniarl84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-4-pvp-enforced-server" />;
}
