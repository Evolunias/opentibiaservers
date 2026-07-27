import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-ots');
}

export default function HighrateShadowcoresOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-ots" />;
}
