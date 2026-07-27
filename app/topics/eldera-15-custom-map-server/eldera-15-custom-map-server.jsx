import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-15-custom-map-server');
}

export default function Eldera15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-15-custom-map-server" />;
}
