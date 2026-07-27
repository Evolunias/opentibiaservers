import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-real-map-server');
}

export default function Oldera12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-real-map-server" />;
}
