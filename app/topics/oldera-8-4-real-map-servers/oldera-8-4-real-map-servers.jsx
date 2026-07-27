import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-4-real-map-servers');
}

export default function Oldera84RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-4-real-map-servers" />;
}
