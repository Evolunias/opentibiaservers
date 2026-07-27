import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-12-real-map-server');
}

export default function Midhem12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-12-real-map-server" />;
}
