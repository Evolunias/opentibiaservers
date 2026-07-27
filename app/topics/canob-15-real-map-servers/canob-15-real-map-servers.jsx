import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-15-real-map-servers');
}

export default function Canob15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-15-real-map-servers" />;
}
