import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-6-custom-map-server');
}

export default function Oldera76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-6-custom-map-server" />;
}
