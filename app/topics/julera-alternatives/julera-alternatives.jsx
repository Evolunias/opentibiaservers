import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera-alternatives');
}

export default function JuleraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="julera-alternatives" />;
}
