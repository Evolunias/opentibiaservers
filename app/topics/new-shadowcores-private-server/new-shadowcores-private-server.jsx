import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-private-server');
}

export default function NewShadowcoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-private-server" />;
}
