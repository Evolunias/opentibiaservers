import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-no-reset-server-poland');
}

export default function EvoleraNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-no-reset-server-poland" />;
}
