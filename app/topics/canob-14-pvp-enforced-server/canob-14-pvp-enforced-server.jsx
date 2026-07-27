import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-14-pvp-enforced-server');
}

export default function Canob14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="canob-14-pvp-enforced-server" />;
}
