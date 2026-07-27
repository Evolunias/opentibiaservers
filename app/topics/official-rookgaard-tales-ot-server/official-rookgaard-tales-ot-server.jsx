import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales-ot-server');
}

export default function OfficialRookgaardTalesOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales-ot-server" />;
}
