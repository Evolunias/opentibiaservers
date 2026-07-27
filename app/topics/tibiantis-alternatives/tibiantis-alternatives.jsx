import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-alternatives');
}

export default function TibiantisAlternativesKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-alternatives" />;
}
