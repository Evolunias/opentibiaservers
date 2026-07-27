import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-register');
}

export default function CustomShadowcoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-register" />;
}
