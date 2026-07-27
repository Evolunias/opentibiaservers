import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-canob-server');
}

export default function PvpEnforcedCanobServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-canob-server" />;
}
