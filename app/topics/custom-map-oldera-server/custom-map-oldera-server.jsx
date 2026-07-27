import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-oldera-server');
}

export default function CustomMapOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-oldera-server" />;
}
