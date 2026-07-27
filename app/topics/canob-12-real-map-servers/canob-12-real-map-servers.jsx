import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-real-map-servers');
}

export default function Canob12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="canob-12-real-map-servers" />;
}
