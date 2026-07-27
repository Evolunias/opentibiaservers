import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-4-real-map-servers');
}

export default function Oldera74RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-4-real-map-servers" />;
}
