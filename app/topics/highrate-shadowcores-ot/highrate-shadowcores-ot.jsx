import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-ot');
}

export default function HighrateShadowcoresOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-ot" />;
}
