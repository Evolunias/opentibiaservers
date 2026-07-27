import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-private-server');
}

export default function TopShadowcoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-private-server" />;
}
