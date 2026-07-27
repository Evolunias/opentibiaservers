import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna-alternatives');
}

export default function InfernaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="inferna-alternatives" />;
}
