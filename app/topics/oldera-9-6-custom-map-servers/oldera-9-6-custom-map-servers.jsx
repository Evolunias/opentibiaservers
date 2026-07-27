import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-custom-map-servers');
}

export default function Oldera96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-custom-map-servers" />;
}
