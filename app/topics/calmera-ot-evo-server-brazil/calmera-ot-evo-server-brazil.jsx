import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-evo-server-brazil');
}

export default function CalmeraOtEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-evo-server-brazil" />;
}
