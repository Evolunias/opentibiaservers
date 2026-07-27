import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-custom-map-servers');
}

export default function Oldera15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-custom-map-servers" />;
}
