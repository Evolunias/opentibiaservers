import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-13-real-map-servers');
}

export default function Canob13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-13-real-map-servers" />;
}
