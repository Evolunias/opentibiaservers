import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-private-server');
}

export default function ActiveDemolidoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-private-server" />;
}
