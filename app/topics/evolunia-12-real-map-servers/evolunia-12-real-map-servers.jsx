import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-real-map-servers');
}

export default function Evolunia12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-real-map-servers" />;
}
