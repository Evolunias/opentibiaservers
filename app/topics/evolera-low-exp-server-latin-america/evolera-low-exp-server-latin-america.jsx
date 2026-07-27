import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-low-exp-server-latin-america');
}

export default function EvoleraLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-low-exp-server-latin-america" />;
}
