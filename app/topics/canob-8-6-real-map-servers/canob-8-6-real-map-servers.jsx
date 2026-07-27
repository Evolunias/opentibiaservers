import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-6-real-map-servers');
}

export default function Canob86RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-8-6-real-map-servers" />;
}
