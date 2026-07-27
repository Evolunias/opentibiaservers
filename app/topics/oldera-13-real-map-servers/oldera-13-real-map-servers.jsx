import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-real-map-servers');
}

export default function Oldera13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-real-map-servers" />;
}
