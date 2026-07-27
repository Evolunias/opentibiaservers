import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-6-real-map-servers');
}

export default function Realesta76RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-6-real-map-servers" />;
}
