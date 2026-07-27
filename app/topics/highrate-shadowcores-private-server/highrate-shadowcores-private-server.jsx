import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-private-server');
}

export default function HighrateShadowcoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-private-server" />;
}
