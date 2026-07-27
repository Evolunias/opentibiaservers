import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-evo-server-poland');
}

export default function CanobEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-evo-server-poland" />;
}
