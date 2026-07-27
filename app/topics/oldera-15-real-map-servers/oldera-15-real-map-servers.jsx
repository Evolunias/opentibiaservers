import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-real-map-servers');
}

export default function Oldera15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-real-map-servers" />;
}
