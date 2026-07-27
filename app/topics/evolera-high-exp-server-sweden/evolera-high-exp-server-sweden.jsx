import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-high-exp-server-sweden');
}

export default function EvoleraHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolera-high-exp-server-sweden" />;
}
