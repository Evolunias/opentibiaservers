import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-0-real-map-server');
}

export default function Eldera100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-0-real-map-server" />;
}
