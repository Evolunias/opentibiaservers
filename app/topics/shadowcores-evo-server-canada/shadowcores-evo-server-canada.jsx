import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-evo-server-canada');
}

export default function ShadowcoresEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-evo-server-canada" />;
}
