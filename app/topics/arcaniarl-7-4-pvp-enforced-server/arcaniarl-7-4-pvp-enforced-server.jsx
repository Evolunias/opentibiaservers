import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-4-pvp-enforced-server');
}

export default function Arcaniarl74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-4-pvp-enforced-server" />;
}
