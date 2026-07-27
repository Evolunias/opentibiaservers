import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-1-custom-map-servers');
}

export default function Midhem71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-1-custom-map-servers" />;
}
