import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-ot-server');
}

export default function NewRookgaardTalesOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-ot-server" />;
}
