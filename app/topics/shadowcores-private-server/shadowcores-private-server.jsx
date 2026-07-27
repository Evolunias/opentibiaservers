import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-private-server');
}

export default function ShadowcoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-private-server" />;
}
