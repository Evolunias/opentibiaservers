import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-15-custom-map-servers');
}

export default function Midhem15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-15-custom-map-servers" />;
}
