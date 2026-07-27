import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-pvp-enforced-server');
}

export default function Canob11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="canob-11-pvp-enforced-server" />;
}
