import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-custom-map-server');
}

export default function Eldera11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-custom-map-server" />;
}
