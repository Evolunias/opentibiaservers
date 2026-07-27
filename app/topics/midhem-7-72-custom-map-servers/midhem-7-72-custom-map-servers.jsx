import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-72-custom-map-servers');
}

export default function Midhem772CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-72-custom-map-servers" />;
}
