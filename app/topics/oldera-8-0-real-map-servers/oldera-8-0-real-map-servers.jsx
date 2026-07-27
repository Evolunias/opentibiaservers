import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-0-real-map-servers');
}

export default function Oldera80RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-0-real-map-servers" />;
}
