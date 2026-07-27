import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales');
}

export default function TopRookgaardTalesKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales" />;
}
