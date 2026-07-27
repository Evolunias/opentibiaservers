import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-9-6-real-map-servers');
}

export default function Canob96RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-9-6-real-map-servers" />;
}
