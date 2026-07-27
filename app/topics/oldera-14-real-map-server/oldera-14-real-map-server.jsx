import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-14-real-map-server');
}

export default function Oldera14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-14-real-map-server" />;
}
