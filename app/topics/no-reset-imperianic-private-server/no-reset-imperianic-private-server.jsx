import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic-private-server');
}

export default function NoResetImperianicPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic-private-server" />;
}
