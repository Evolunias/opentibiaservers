import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-server');
}

export default function HighrateShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-server" />;
}
