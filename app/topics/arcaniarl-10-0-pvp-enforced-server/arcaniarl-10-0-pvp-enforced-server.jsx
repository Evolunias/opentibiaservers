import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-0-pvp-enforced-server');
}

export default function Arcaniarl100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-0-pvp-enforced-server" />;
}
