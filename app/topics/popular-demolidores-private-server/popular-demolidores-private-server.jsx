import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-private-server');
}

export default function PopularDemolidoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-private-server" />;
}
