import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-0-pvp-enforced-server');
}

export default function Arcaniarl80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-0-pvp-enforced-server" />;
}
