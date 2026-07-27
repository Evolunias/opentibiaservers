import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-login');
}

export default function NoResetShadowcoresLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-login" />;
}
