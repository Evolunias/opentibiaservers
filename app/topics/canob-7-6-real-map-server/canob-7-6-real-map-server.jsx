import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-6-real-map-server');
}

export default function Canob76RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-6-real-map-server" />;
}
