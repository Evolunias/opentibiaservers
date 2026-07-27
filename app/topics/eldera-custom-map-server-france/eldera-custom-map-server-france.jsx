import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-server-france');
}

export default function ElderaCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-server-france" />;
}
