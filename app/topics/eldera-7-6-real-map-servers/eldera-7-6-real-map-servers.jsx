import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-6-real-map-servers');
}

export default function Eldera76RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-6-real-map-servers" />;
}
