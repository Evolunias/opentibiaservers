import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-evo-server-uk');
}

export default function ThaisotEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="thaisot-evo-server-uk" />;
}
