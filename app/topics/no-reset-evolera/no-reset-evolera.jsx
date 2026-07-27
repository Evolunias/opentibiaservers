import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera');
}

export default function NoResetEvoleraKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera" />;
}
