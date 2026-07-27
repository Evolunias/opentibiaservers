import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-alternatives');
}

export default function MidhemAlternativesKeywordPage() {
  return <StaticKeywordPage slug="midhem-alternatives" />;
}
