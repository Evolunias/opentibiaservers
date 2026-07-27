import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera-alternatives');
}

export default function QuinteraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="quintera-alternatives" />;
}
