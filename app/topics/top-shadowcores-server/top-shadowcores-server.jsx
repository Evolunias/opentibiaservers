import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-server');
}

export default function TopShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-server" />;
}
