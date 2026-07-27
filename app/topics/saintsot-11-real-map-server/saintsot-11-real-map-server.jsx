import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-11-real-map-server');
}

export default function Saintsot11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-11-real-map-server" />;
}
