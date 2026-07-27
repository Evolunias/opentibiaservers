import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-retro-server-canada');
}

export default function EvoleraRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolera-retro-server-canada" />;
}
