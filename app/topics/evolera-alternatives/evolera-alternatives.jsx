import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-alternatives');
}

export default function EvoleraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="evolera-alternatives" />;
}
