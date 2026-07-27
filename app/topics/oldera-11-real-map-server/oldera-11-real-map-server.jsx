import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-real-map-server');
}

export default function Oldera11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-real-map-server" />;
}
