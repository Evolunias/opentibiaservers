import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-real-map-server');
}

export default function Nostalther15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-real-map-server" />;
}
