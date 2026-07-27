import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-real-map-server');
}

export default function Oldera13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-real-map-server" />;
}
