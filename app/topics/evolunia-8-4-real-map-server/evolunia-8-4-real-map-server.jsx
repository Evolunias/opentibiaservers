import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-4-real-map-server');
}

export default function Evolunia84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-4-real-map-server" />;
}
