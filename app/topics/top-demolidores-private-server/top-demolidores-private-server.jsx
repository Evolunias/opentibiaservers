import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores-private-server');
}

export default function TopDemolidoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores-private-server" />;
}
