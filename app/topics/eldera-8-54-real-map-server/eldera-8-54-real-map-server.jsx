import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-54-real-map-server');
}

export default function Eldera854RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-54-real-map-server" />;
}
