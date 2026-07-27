import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-6-real-map-server');
}

export default function Midhem76RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-6-real-map-server" />;
}
