import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-15-real-map-server');
}

export default function Midhem15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-15-real-map-server" />;
}
