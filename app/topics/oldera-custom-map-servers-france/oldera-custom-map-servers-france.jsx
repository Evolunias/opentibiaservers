import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-servers-france');
}

export default function OlderaCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-servers-france" />;
}
