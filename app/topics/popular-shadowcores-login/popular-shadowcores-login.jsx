import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-login');
}

export default function PopularShadowcoresLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-login" />;
}
