import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-ots');
}

export default function BestRookgaardTalesOtsKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-ots" />;
}
