import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-1-real-map-servers');
}

export default function Canob71RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-7-1-real-map-servers" />;
}
