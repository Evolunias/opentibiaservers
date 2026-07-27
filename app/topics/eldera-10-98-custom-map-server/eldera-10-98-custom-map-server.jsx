import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-98-custom-map-server');
}

export default function Eldera1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-98-custom-map-server" />;
}
