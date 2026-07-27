import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-private-server');
}

export default function PopularShadowcoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-private-server" />;
}
