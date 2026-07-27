import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-15-real-map-server');
}

export default function Evolunia15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-15-real-map-server" />;
}
