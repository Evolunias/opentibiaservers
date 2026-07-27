import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-login');
}

export default function HighrateShadowcoresLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-login" />;
}
