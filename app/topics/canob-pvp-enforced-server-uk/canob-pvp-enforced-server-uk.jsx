import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvp-enforced-server-uk');
}

export default function CanobPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="canob-pvp-enforced-server-uk" />;
}
