import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-private-server');
}

export default function NoResetUnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-private-server" />;
}
