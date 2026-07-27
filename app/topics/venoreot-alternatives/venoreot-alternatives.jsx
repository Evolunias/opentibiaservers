import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-alternatives');
}

export default function VenoreotAlternativesKeywordPage() {
  return <StaticKeywordPage slug="venoreot-alternatives" />;
}
