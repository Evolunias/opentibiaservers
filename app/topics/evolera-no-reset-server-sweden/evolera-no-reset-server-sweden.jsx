import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-no-reset-server-sweden');
}

export default function EvoleraNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolera-no-reset-server-sweden" />;
}
