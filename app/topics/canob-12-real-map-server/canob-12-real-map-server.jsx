import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-real-map-server');
}

export default function Canob12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-12-real-map-server" />;
}
