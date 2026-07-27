import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-6-real-map-server');
}

export default function Evolunia76RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-6-real-map-server" />;
}
