import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-private-server');
}

export default function CustomShadowcoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-private-server" />;
}
