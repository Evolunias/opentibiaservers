import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-login');
}

export default function TopShadowcoresLoginKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-login" />;
}
