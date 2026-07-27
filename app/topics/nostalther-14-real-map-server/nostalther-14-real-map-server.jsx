import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-14-real-map-server');
}

export default function Nostalther14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-14-real-map-server" />;
}
