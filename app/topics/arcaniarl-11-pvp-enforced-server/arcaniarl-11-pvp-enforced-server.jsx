import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-11-pvp-enforced-server');
}

export default function Arcaniarl11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-11-pvp-enforced-server" />;
}
