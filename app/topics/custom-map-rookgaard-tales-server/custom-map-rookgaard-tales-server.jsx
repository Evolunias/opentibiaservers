import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-rookgaard-tales-server');
}

export default function CustomMapRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-rookgaard-tales-server" />;
}
