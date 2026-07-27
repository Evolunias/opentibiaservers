import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-private-server');
}

export default function NoResetRealestaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-private-server" />;
}
