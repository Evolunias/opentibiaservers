import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-servers-france');
}

export default function KasteriaCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-servers-france" />;
}
