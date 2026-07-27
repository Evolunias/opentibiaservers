import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-evo-server-mexico');
}

export default function ShadowcoresEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-evo-server-mexico" />;
}
