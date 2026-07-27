import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-server');
}

export default function RealMapElderaServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-server" />;
}
