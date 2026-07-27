import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-real-map-servers');
}

export default function Oldera11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-real-map-servers" />;
}
