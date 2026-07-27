import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-shadowcores-server');
}

export default function EvoShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="evo-shadowcores-server" />;
}
