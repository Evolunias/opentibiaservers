import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores-login');
}

export default function BestShadowcoresLoginKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores-login" />;
}
