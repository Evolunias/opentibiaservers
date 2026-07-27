import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-server-mexico');
}

export default function ElderaCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-server-mexico" />;
}
