import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-ots');
}

export default function PopularRookgaardTalesOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-ots" />;
}
