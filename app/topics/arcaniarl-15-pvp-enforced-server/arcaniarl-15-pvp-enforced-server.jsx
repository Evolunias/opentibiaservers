import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-15-pvp-enforced-server');
}

export default function Arcaniarl15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-15-pvp-enforced-server" />;
}
