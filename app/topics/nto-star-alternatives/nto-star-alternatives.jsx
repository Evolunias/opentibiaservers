import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-alternatives');
}

export default function NtoStarAlternativesKeywordPage() {
  return <StaticKeywordPage slug="nto-star-alternatives" />;
}
