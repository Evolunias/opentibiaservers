import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-ot-server');
}

export default function LowrateRookgaardTalesOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-ot-server" />;
}
