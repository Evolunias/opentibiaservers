import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-6-real-map-servers');
}

export default function Oldera76RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-6-real-map-servers" />;
}
