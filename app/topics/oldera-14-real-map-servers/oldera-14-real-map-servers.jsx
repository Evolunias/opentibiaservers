import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-14-real-map-servers');
}

export default function Oldera14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-14-real-map-servers" />;
}
