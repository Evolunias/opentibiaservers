import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-98-pvp-enforced-server');
}

export default function Arcaniarl1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-98-pvp-enforced-server" />;
}
