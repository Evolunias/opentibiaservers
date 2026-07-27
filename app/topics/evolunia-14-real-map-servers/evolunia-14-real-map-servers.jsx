import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-real-map-servers');
}

export default function Evolunia14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-real-map-servers" />;
}
