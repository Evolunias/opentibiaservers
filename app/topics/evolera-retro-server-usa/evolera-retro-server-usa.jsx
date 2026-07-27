import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-retro-server-usa');
}

export default function EvoleraRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolera-retro-server-usa" />;
}
