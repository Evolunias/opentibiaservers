import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-servers-france');
}

export default function KasteriaRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-servers-france" />;
}
