import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-72-real-map-server');
}

export default function Oldera772RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-72-real-map-server" />;
}
