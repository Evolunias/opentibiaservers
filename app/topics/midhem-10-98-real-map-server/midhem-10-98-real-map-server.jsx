import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-98-real-map-server');
}

export default function Midhem1098RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-98-real-map-server" />;
}
