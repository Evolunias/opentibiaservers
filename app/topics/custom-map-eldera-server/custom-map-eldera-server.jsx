import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-eldera-server');
}

export default function CustomMapElderaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-eldera-server" />;
}
