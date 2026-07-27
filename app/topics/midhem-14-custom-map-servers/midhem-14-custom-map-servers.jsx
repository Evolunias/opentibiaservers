import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-14-custom-map-servers');
}

export default function Midhem14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-14-custom-map-servers" />;
}
