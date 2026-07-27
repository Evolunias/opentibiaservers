import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores');
}

export default function BestShadowcoresKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores" />;
}
