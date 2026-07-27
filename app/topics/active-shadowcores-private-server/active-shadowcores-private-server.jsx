import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-private-server');
}

export default function ActiveShadowcoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-private-server" />;
}
