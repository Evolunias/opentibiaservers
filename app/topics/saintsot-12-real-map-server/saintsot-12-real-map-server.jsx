import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-12-real-map-server');
}

export default function Saintsot12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-12-real-map-server" />;
}
