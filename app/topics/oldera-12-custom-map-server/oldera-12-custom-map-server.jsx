import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-custom-map-server');
}

export default function Oldera12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-custom-map-server" />;
}
