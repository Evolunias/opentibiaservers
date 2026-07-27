import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-server-argentina');
}

export default function ElderaCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-server-argentina" />;
}
