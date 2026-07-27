import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-ots');
}

export default function PopularShadowcoresOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-ots" />;
}
