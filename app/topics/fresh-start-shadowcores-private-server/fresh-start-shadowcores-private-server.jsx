import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores-private-server');
}

export default function FreshStartShadowcoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores-private-server" />;
}
