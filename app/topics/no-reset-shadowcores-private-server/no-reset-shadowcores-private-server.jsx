import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-private-server');
}

export default function NoResetShadowcoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-private-server" />;
}
