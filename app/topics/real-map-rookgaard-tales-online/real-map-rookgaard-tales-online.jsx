import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rookgaard-tales-online');
}

export default function RealMapRookgaardTalesOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-rookgaard-tales-online" />;
}
