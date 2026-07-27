import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-alternatives');
}

export default function NostaltherAlternativesKeywordPage() {
  return <StaticKeywordPage slug="nostalther-alternatives" />;
}
