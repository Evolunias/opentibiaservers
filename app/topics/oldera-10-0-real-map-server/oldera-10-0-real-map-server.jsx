import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-0-real-map-server');
}

export default function Oldera100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-0-real-map-server" />;
}
