import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores-ot');
}

export default function FreshStartShadowcoresOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores-ot" />;
}
