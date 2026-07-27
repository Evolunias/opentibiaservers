import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-no-reset-server-uk');
}

export default function EvoleraNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolera-no-reset-server-uk" />;
}
