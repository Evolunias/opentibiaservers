import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-13-real-map-server');
}

export default function Canob13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-13-real-map-server" />;
}
