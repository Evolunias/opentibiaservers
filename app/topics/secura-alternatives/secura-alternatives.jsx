import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura-alternatives');
}

export default function SecuraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="secura-alternatives" />;
}
