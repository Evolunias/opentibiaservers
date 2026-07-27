import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-6-pvp-enforced-server');
}

export default function Arcaniarl86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-6-pvp-enforced-server" />;
}
