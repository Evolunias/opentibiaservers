import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-evo-server-mexico');
}

export default function CalmeraOtEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-evo-server-mexico" />;
}
