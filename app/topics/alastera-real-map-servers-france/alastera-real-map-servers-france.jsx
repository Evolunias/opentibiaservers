import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-servers-france');
}

export default function AlasteraRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-servers-france" />;
}
