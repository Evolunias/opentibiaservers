import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-real-map-server');
}

export default function Evolunia13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-real-map-server" />;
}
