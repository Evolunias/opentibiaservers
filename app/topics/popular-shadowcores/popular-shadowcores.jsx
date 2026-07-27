import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores');
}

export default function PopularShadowcoresKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores" />;
}
