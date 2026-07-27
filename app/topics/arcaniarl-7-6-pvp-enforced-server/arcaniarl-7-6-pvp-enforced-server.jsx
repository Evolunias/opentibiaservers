import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-6-pvp-enforced-server');
}

export default function Arcaniarl76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-6-pvp-enforced-server" />;
}
