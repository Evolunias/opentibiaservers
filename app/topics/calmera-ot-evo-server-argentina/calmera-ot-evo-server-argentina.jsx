import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-evo-server-argentina');
}

export default function CalmeraOtEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-evo-server-argentina" />;
}
