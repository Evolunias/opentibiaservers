import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-15-real-map-server');
}

export default function Eldera15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-15-real-map-server" />;
}
