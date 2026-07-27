import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-0-real-map-server');
}

export default function Nostalther80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-0-real-map-server" />;
}
