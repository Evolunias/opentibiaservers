import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-ot-server');
}

export default function TopRookgaardTalesOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-ot-server" />;
}
