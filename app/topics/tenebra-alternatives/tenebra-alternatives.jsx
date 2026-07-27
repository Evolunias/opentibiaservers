import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra-alternatives');
}

export default function TenebraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="tenebra-alternatives" />;
}
