import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-15-real-map-server');
}

export default function Saintsot15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-15-real-map-server" />;
}
