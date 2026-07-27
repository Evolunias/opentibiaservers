import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-6-real-map-server');
}

export default function Canob86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-6-real-map-server" />;
}
