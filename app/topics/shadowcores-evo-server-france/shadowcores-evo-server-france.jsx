import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-evo-server-france');
}

export default function ShadowcoresEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-evo-server-france" />;
}
