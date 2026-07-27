import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-13-real-map-server');
}

export default function Nostalther13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-13-real-map-server" />;
}
