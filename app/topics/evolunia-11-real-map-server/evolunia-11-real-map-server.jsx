import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-11-real-map-server');
}

export default function Evolunia11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-11-real-map-server" />;
}
