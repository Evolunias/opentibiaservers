import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rookgaard-tales-ots');
}

export default function CurrentRookgaardTalesOtsKeywordPage() {
  return <StaticKeywordPage slug="current-rookgaard-tales-ots" />;
}
