import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-ot-server');
}

export default function CustomRookgaardTalesOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-ot-server" />;
}
