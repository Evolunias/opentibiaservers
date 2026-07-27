import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-alternatives');
}

export default function RealestaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="realesta-alternatives" />;
}
