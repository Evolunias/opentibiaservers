import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('vinera-alternatives');
}

export default function VineraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="vinera-alternatives" />;
}
