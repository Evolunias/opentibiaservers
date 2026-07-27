import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-no-reset-server-usa');
}

export default function EvoleraNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolera-no-reset-server-usa" />;
}
