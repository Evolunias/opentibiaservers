import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-4-real-map-server');
}

export default function Eldera74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-4-real-map-server" />;
}
