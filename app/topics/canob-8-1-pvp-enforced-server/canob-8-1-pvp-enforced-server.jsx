import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-1-pvp-enforced-server');
}

export default function Canob81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-1-pvp-enforced-server" />;
}
