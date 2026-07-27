import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-evo-server-france');
}

export default function CalmeraOtEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-evo-server-france" />;
}
