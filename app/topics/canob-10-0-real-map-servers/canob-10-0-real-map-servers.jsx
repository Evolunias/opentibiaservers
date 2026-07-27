import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-0-real-map-servers');
}

export default function Canob100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-10-0-real-map-servers" />;
}
