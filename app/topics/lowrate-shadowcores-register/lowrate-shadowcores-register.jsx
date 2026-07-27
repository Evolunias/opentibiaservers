import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-register');
}

export default function LowrateShadowcoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-register" />;
}
