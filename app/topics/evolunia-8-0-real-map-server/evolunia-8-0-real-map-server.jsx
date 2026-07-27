import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-0-real-map-server');
}

export default function Evolunia80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-0-real-map-server" />;
}
