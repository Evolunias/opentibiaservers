import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-guide');
}

export default function HighrateShadowcoresGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-guide" />;
}
