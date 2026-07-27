import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-14-real-map-servers');
}

export default function Canob14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-14-real-map-servers" />;
}
