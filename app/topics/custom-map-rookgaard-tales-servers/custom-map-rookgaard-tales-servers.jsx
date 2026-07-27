import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-rookgaard-tales-servers');
}

export default function CustomMapRookgaardTalesServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-rookgaard-tales-servers" />;
}
