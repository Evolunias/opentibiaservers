import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera-alternatives');
}

export default function LiberaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="libera-alternatives" />;
}
