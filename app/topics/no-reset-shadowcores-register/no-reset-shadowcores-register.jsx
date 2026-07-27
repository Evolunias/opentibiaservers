import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-register');
}

export default function NoResetShadowcoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-register" />;
}
