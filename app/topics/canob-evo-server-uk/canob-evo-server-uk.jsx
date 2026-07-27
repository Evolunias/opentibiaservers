import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-evo-server-uk');
}

export default function CanobEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="canob-evo-server-uk" />;
}
