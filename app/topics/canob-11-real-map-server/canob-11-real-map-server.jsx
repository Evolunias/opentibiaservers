import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-real-map-server');
}

export default function Canob11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-11-real-map-server" />;
}
