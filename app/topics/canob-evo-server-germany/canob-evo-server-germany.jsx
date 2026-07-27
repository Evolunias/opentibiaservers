import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-evo-server-germany');
}

export default function CanobEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="canob-evo-server-germany" />;
}
