import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-custom-map-server');
}

export default function Oldera15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-custom-map-server" />;
}
