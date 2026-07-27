import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales');
}

export default function BestRookgaardTalesKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales" />;
}
