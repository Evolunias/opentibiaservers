import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-9-6-pvp-enforced-server');
}

export default function Arcaniarl96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-9-6-pvp-enforced-server" />;
}
