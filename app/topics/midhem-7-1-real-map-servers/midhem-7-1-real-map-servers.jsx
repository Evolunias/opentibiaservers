import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-1-real-map-servers');
}

export default function Midhem71RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-1-real-map-servers" />;
}
