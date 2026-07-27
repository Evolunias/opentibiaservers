import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shivera-alternatives');
}

export default function ShiveraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="shivera-alternatives" />;
}
