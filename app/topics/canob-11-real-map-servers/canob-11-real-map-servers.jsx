import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-real-map-servers');
}

export default function Canob11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-11-real-map-servers" />;
}
