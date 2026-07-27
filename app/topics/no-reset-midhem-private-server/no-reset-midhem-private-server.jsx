import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-private-server');
}

export default function NoResetMidhemPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-private-server" />;
}
