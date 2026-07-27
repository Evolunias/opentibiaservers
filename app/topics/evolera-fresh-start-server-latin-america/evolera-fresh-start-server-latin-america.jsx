import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-fresh-start-server-latin-america');
}

export default function EvoleraFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-fresh-start-server-latin-america" />;
}
