import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-client');
}

export default function HighrateShadowcoresClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-client" />;
}
