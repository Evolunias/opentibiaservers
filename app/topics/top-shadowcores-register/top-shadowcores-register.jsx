import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-register');
}

export default function TopShadowcoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-register" />;
}
