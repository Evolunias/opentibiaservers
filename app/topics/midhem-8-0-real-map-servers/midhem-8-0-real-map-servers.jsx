import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-0-real-map-servers');
}

export default function Midhem80RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-0-real-map-servers" />;
}
