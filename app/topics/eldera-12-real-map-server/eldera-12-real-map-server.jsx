import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-12-real-map-server');
}

export default function Eldera12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-12-real-map-server" />;
}
