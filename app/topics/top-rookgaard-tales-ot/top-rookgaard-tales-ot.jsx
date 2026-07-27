import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-ot');
}

export default function TopRookgaardTalesOtKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-ot" />;
}
