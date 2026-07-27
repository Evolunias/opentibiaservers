import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-alternatives');
}

export default function ArcaniarlAlternativesKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-alternatives" />;
}
