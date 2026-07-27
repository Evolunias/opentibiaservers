import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores');
}

export default function HighrateShadowcoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores" />;
}
