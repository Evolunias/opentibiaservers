import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-alternatives');
}

export default function KasteriaAlternativesKeywordPage() {
  return <StaticKeywordPage slug="kasteria-alternatives" />;
}
