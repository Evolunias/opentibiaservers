import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria-private-server');
}

export default function NoResetKasteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria-private-server" />;
}
