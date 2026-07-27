import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-ot-server');
}

export default function HighrateShadowcoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-ot-server" />;
}
