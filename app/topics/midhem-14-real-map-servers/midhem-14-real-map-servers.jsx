import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-14-real-map-servers');
}

export default function Midhem14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-14-real-map-servers" />;
}
