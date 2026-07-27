import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia-alternatives');
}

export default function PremiaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="premia-alternatives" />;
}
