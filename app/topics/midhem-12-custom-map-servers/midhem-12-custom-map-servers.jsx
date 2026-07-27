import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-12-custom-map-servers');
}

export default function Midhem12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-12-custom-map-servers" />;
}
