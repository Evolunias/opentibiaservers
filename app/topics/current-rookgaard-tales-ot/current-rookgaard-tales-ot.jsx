import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rookgaard-tales-ot');
}

export default function CurrentRookgaardTalesOtKeywordPage() {
  return <StaticKeywordPage slug="current-rookgaard-tales-ot" />;
}
