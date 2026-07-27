import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-4-real-map-server');
}

export default function Evolunia74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-4-real-map-server" />;
}
