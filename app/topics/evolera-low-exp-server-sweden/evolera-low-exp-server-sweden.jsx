import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-low-exp-server-sweden');
}

export default function EvoleraLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolera-low-exp-server-sweden" />;
}
