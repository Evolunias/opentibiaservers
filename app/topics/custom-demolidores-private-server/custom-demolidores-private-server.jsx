import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-demolidores-private-server');
}

export default function CustomDemolidoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-demolidores-private-server" />;
}
