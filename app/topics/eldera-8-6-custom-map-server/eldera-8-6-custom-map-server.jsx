import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-6-custom-map-server');
}

export default function Eldera86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-6-custom-map-server" />;
}
