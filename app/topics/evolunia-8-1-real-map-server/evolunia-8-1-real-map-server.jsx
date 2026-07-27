import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-1-real-map-server');
}

export default function Evolunia81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-1-real-map-server" />;
}
