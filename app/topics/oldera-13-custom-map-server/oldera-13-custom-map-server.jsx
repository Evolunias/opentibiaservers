import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-custom-map-server');
}

export default function Oldera13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-custom-map-server" />;
}
