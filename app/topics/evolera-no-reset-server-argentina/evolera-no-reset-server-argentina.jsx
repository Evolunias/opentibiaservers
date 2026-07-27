import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-no-reset-server-argentina');
}

export default function EvoleraNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-no-reset-server-argentina" />;
}
