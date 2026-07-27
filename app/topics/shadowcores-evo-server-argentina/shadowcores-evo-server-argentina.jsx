import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-evo-server-argentina');
}

export default function ShadowcoresEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-evo-server-argentina" />;
}
