import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-11-real-map-servers');
}

export default function Midhem11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-11-real-map-servers" />;
}
