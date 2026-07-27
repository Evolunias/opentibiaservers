import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-evo-server-poland');
}

export default function CalmeraOtEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-evo-server-poland" />;
}
