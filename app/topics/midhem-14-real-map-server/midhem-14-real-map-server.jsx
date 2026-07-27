import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-14-real-map-server');
}

export default function Midhem14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-14-real-map-server" />;
}
