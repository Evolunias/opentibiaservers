import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana-alternatives');
}

export default function NeranaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="nerana-alternatives" />;
}
