import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-custom-map-servers');
}

export default function Oldera13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-custom-map-servers" />;
}
