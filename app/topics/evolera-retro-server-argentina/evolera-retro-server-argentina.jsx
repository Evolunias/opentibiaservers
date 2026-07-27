import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-retro-server-argentina');
}

export default function EvoleraRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-retro-server-argentina" />;
}
