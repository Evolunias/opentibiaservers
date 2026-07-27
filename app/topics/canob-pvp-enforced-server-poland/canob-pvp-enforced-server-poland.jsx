import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-enforced-server-poland');
}

export default function CanobPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-enforced-server-poland" />;
}
