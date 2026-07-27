import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-1-custom-map-server');
}

export default function Oldera71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-1-custom-map-server" />;
}
