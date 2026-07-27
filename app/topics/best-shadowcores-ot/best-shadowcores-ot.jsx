import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores-ot');
}

export default function BestShadowcoresOtKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores-ot" />;
}
