import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-14-real-map-server');
}

export default function Eldera14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-14-real-map-server" />;
}
