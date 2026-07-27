import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-evo-server-usa');
}

export default function ShadowcoresEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-evo-server-usa" />;
}
