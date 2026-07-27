import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-retro-server-germany');
}

export default function EvoleraRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-retro-server-germany" />;
}
