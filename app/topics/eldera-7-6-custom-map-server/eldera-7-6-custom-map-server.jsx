import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-6-custom-map-server');
}

export default function Eldera76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-6-custom-map-server" />;
}
