import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-ot');
}

export default function PopularShadowcoresOtKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-ot" />;
}
