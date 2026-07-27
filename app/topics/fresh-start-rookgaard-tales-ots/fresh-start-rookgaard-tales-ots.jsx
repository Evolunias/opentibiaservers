import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rookgaard-tales-ots');
}

export default function FreshStartRookgaardTalesOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rookgaard-tales-ots" />;
}
