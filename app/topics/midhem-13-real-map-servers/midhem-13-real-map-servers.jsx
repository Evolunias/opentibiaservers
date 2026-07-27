import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-13-real-map-servers');
}

export default function Midhem13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-13-real-map-servers" />;
}
