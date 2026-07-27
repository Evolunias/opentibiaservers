import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-real-map-server');
}

export default function Oldera15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-real-map-server" />;
}
