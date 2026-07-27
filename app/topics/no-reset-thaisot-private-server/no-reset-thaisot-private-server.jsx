import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-private-server');
}

export default function NoResetThaisotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-private-server" />;
}
