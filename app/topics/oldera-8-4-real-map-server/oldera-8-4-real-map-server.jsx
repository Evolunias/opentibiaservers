import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-4-real-map-server');
}

export default function Oldera84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-4-real-map-server" />;
}
