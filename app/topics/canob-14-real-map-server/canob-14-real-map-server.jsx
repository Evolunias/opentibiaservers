import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-14-real-map-server');
}

export default function Canob14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-14-real-map-server" />;
}
