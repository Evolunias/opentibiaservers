import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-alternatives');
}

export default function TibijkaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="tibijka-alternatives" />;
}
