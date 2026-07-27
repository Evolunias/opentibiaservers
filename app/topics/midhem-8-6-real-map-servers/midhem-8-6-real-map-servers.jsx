import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-6-real-map-servers');
}

export default function Midhem86RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-6-real-map-servers" />;
}
