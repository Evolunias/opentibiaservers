import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-6-custom-map-servers');
}

export default function Oldera76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-6-custom-map-servers" />;
}
