import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-servers-france');
}

export default function ElderaCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-servers-france" />;
}
