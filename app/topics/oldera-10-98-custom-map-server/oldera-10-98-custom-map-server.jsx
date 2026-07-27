import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-98-custom-map-server');
}

export default function Oldera1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-98-custom-map-server" />;
}
