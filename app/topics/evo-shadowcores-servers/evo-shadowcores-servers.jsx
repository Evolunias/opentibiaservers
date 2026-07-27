import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-shadowcores-servers');
}

export default function EvoShadowcoresServersKeywordPage() {
  return <StaticKeywordPage slug="evo-shadowcores-servers" />;
}
