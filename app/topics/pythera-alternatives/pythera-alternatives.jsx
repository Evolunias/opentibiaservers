import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pythera-alternatives');
}

export default function PytheraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="pythera-alternatives" />;
}
