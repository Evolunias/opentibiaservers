import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia-private-server');
}

export default function NoResetMediviaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia-private-server" />;
}
