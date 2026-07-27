import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores');
}

export default function FreshStartShadowcoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores" />;
}
