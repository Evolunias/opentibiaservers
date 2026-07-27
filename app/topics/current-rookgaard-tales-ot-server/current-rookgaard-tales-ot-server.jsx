import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rookgaard-tales-ot-server');
}

export default function CurrentRookgaardTalesOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-rookgaard-tales-ot-server" />;
}
