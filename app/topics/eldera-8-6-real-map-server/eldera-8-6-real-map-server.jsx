import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-6-real-map-server');
}

export default function Eldera86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-6-real-map-server" />;
}
