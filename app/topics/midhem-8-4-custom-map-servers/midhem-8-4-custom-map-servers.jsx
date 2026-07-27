import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-4-custom-map-servers');
}

export default function Midhem84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-4-custom-map-servers" />;
}
