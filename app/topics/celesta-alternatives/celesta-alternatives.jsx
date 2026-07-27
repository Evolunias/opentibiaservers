import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta-alternatives');
}

export default function CelestaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="celesta-alternatives" />;
}
