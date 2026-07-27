import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-ot-server');
}

export default function PopularRookgaardTalesOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-ot-server" />;
}
