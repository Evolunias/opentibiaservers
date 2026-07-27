import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-private-server');
}

export default function NoResetEvoleraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-private-server" />;
}
