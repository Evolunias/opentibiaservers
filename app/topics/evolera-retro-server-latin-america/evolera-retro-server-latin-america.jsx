import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-retro-server-latin-america');
}

export default function EvoleraRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-retro-server-latin-america" />;
}
