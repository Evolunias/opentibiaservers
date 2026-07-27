import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-evo-server-germany');
}

export default function CalmeraOtEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-evo-server-germany" />;
}
