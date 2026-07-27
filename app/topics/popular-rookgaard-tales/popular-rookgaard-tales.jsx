import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales');
}

export default function PopularRookgaardTalesKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales" />;
}
