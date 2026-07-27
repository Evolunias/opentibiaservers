import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-evo-servers-brazil');
}

export default function CalmeraOtEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-evo-servers-brazil" />;
}
