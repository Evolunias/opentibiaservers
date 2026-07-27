import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-private-server');
}

export default function NoResetDemolidoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-private-server" />;
}
