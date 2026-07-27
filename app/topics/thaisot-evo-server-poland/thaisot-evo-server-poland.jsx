import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-evo-server-poland');
}

export default function ThaisotEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thaisot-evo-server-poland" />;
}
