import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-private-server');
}

export default function NoResetClassicusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-private-server" />;
}
