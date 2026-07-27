import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-real-map-server');
}

export default function Evolunia14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-real-map-server" />;
}
