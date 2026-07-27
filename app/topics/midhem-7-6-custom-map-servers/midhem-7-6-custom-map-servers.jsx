import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-6-custom-map-servers');
}

export default function Midhem76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-6-custom-map-servers" />;
}
