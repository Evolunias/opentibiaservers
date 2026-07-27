import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores-ots');
}

export default function FreshStartShadowcoresOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores-ots" />;
}
