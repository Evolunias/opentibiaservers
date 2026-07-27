import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-ots');
}

export default function TopShadowcoresOtsKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-ots" />;
}
