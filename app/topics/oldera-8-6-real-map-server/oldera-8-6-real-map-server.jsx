import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-6-real-map-server');
}

export default function Oldera86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-6-real-map-server" />;
}
