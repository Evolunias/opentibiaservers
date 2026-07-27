import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-72-custom-map-server');
}

export default function Oldera772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-72-custom-map-server" />;
}
