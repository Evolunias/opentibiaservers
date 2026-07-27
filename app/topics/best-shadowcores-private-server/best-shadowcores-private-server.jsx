import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores-private-server');
}

export default function BestShadowcoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores-private-server" />;
}
