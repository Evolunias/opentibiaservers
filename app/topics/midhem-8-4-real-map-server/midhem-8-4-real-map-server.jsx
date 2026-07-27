import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-4-real-map-server');
}

export default function Midhem84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-4-real-map-server" />;
}
