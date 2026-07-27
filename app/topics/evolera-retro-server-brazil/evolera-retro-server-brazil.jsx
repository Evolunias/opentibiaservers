import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-retro-server-brazil');
}

export default function EvoleraRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-retro-server-brazil" />;
}
