import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-0-real-map-server');
}

export default function Midhem100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-0-real-map-server" />;
}
