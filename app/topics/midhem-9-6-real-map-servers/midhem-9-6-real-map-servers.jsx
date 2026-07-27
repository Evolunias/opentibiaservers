import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-9-6-real-map-servers');
}

export default function Midhem96RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-9-6-real-map-servers" />;
}
