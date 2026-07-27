import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-15-real-map-servers');
}

export default function Midhem15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-15-real-map-servers" />;
}
