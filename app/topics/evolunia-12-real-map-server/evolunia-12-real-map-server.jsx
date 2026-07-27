import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-real-map-server');
}

export default function Evolunia12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-real-map-server" />;
}
