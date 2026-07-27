import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores-private-server');
}

export default function CurrentShadowcoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores-private-server" />;
}
