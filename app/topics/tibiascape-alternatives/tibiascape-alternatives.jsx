import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-alternatives');
}

export default function TibiascapeAlternativesKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-alternatives" />;
}
