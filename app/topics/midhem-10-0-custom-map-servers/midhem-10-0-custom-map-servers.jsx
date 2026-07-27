import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-0-custom-map-servers');
}

export default function Midhem100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-0-custom-map-servers" />;
}
