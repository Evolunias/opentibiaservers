import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-custom-map-servers');
}

export default function Oldera12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-custom-map-servers" />;
}
