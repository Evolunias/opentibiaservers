import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rookgaard-tales-ot-server');
}

export default function FreshStartRookgaardTalesOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rookgaard-tales-ot-server" />;
}
