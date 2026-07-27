import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-15-real-map-servers');
}

export default function Evolunia15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-15-real-map-servers" />;
}
