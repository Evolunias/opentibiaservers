import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-evo-server-canada');
}

export default function CalmeraOtEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-evo-server-canada" />;
}
