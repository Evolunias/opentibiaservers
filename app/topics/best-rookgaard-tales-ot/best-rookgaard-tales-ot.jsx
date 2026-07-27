import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-ot');
}

export default function BestRookgaardTalesOtKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-ot" />;
}
