import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-real-map-server');
}

export default function Oldera96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-real-map-server" />;
}
