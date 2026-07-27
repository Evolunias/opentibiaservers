import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores');
}

export default function TopShadowcoresKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores" />;
}
