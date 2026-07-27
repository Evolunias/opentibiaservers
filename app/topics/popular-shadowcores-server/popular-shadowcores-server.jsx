import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-server');
}

export default function PopularShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-server" />;
}
