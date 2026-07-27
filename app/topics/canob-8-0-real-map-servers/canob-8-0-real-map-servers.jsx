import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-0-real-map-servers');
}

export default function Canob80RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-8-0-real-map-servers" />;
}
