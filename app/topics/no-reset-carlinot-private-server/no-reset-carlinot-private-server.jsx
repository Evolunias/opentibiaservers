import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-private-server');
}

export default function NoResetCarlinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-private-server" />;
}
