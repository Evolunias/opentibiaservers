import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores-ot');
}

export default function CurrentShadowcoresOtKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores-ot" />;
}
