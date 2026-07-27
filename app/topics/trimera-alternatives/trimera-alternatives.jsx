import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera-alternatives');
}

export default function TrimeraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="trimera-alternatives" />;
}
