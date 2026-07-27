import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-private-server');
}

export default function NoResetNepreniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-private-server" />;
}
