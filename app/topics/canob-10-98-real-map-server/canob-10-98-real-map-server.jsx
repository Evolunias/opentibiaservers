import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-98-real-map-server');
}

export default function Canob1098RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-98-real-map-server" />;
}
