import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-xanteria-guide');
}

export default function PopularXanteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-xanteria-guide" />;
}
