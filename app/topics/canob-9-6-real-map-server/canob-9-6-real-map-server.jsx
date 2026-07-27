import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-9-6-real-map-server');
}

export default function Canob96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-9-6-real-map-server" />;
}
