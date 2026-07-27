import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-13-real-map-server');
}

export default function Midhem13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-13-real-map-server" />;
}
