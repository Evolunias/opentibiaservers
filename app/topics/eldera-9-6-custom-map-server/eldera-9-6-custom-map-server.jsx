import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-9-6-custom-map-server');
}

export default function Eldera96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-9-6-custom-map-server" />;
}
