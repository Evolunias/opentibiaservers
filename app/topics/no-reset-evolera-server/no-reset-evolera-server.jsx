import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-server');
}

export default function NoResetEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-server" />;
}
