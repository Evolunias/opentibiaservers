import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-ots');
}

export default function TopRookgaardTalesOtsKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-ots" />;
}
