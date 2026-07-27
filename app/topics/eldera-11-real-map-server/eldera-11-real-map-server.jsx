import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-real-map-server');
}

export default function Eldera11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-real-map-server" />;
}
