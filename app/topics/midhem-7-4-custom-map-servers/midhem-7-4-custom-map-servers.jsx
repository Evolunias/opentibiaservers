import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-4-custom-map-servers');
}

export default function Midhem74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-4-custom-map-servers" />;
}
