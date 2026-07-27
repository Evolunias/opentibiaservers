import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-11-real-map-server');
}

export default function Nostalther11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-11-real-map-server" />;
}
