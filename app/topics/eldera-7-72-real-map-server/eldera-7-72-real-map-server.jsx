import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-72-real-map-server');
}

export default function Eldera772RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-72-real-map-server" />;
}
