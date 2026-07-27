import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-1-real-map-server');
}

export default function Midhem81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-1-real-map-server" />;
}
