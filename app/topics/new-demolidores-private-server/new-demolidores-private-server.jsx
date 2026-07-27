import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-private-server');
}

export default function NewDemolidoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-private-server" />;
}
