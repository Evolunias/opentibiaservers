import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-custom-map-server');
}

export default function Oldera11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-custom-map-server" />;
}
