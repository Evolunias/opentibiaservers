import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-no-reset-server-germany');
}

export default function EvoleraNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-no-reset-server-germany" />;
}
