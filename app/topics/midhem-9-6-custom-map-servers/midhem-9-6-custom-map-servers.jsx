import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-9-6-custom-map-servers');
}

export default function Midhem96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-9-6-custom-map-servers" />;
}
