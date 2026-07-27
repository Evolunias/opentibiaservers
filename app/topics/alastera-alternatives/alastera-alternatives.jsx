import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-alternatives');
}

export default function AlasteraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="alastera-alternatives" />;
}
