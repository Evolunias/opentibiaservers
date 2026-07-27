import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-yurots-server');
}

export default function NoResetYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-yurots-server" />;
}
