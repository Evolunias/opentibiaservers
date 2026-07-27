import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-0-custom-map-server');
}

export default function Eldera100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-0-custom-map-server" />;
}
