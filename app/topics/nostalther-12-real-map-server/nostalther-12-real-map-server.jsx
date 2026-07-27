import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-12-real-map-server');
}

export default function Nostalther12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-12-real-map-server" />;
}
