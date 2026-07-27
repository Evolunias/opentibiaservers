import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-servers-argentina');
}

export default function ElderaCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-servers-argentina" />;
}
