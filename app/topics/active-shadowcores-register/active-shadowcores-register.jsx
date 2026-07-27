import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-register');
}

export default function ActiveShadowcoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-register" />;
}
