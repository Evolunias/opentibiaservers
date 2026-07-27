import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-ot');
}

export default function TopShadowcoresOtKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-ot" />;
}
