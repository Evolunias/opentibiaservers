import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-private-server');
}

export default function NoResetOlderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-private-server" />;
}
