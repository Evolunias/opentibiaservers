import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores-register');
}

export default function BestShadowcoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores-register" />;
}
