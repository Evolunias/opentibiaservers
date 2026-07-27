import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-4-real-map-server');
}

export default function Canob84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-4-real-map-server" />;
}
