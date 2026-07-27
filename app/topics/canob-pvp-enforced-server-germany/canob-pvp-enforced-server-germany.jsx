import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-enforced-server-germany');
}

export default function CanobPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-enforced-server-germany" />;
}
