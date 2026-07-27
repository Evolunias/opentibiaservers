import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-private-server');
}

export default function BestDemolidoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-private-server" />;
}
