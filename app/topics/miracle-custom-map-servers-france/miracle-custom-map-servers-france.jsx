import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-servers-france');
}

export default function MiracleCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-servers-france" />;
}
