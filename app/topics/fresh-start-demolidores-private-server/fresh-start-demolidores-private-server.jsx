import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-private-server');
}

export default function FreshStartDemolidoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-private-server" />;
}
