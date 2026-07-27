import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-fresh-start-server-sweden');
}

export default function EvoleraFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolera-fresh-start-server-sweden" />;
}
