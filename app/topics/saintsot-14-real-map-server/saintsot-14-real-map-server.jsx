import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-14-real-map-server');
}

export default function Saintsot14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-14-real-map-server" />;
}
