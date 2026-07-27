import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-15-real-map-server');
}

export default function Canob15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-15-real-map-server" />;
}
