import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eldera-private-server');
}

export default function NoResetElderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eldera-private-server" />;
}
