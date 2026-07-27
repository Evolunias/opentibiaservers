import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-13-real-map-server');
}

export default function Eldera13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-13-real-map-server" />;
}
