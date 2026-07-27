import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-private-server');
}

export default function CurrentDemolidoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-private-server" />;
}
