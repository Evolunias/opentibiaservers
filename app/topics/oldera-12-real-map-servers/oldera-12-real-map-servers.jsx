import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-real-map-servers');
}

export default function Oldera12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-real-map-servers" />;
}
