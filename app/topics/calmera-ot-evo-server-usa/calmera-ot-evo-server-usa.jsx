import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-evo-server-usa');
}

export default function CalmeraOtEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-evo-server-usa" />;
}
