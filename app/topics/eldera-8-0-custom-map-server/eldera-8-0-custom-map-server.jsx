import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-0-custom-map-server');
}

export default function Eldera80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-0-custom-map-server" />;
}
