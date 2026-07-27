import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-ot');
}

export default function PopularRookgaardTalesOtKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-ot" />;
}
