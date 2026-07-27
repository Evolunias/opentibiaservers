import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-alternatives');
}

export default function NilotAlternativesKeywordPage() {
  return <StaticKeywordPage slug="nilot-alternatives" />;
}
