import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-private-server');
}

export default function LowrateShadowcoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-private-server" />;
}
