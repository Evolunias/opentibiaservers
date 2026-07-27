import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-private-server');
}

export default function DemolidoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-private-server" />;
}
