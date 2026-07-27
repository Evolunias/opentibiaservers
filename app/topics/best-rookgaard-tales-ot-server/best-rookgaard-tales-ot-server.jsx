import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-ot-server');
}

export default function BestRookgaardTalesOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-ot-server" />;
}
