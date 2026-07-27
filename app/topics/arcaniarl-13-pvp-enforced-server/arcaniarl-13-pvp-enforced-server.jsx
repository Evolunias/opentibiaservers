import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-13-pvp-enforced-server');
}

export default function Arcaniarl13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-13-pvp-enforced-server" />;
}
