import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-6-real-map-server');
}

export default function Midhem86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-6-real-map-server" />;
}
