import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-servers-mexico');
}

export default function ElderaCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-servers-mexico" />;
}
