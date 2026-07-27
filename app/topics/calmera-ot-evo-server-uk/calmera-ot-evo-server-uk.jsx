import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-evo-server-uk');
}

export default function CalmeraOtEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-evo-server-uk" />;
}
