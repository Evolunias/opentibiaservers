import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-retro-server-sweden');
}

export default function EvoleraRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolera-retro-server-sweden" />;
}
