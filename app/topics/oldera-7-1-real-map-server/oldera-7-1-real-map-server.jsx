import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-1-real-map-server');
}

export default function Oldera71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-1-real-map-server" />;
}
