import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-no-reset-server-canada');
}

export default function EvoleraNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolera-no-reset-server-canada" />;
}
