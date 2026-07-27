import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-no-reset-server-brazil');
}

export default function EvoleraNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-no-reset-server-brazil" />;
}
