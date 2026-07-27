import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-register');
}

export default function HighrateShadowcoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-register" />;
}
