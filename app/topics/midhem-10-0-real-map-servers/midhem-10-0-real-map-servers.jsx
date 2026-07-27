import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-0-real-map-servers');
}

export default function Midhem100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-0-real-map-servers" />;
}
