import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-no-reset-server-latin-america');
}

export default function EvoleraNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-no-reset-server-latin-america" />;
}
