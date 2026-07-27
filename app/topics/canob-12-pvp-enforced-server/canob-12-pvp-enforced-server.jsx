import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-pvp-enforced-server');
}

export default function Canob12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="canob-12-pvp-enforced-server" />;
}
