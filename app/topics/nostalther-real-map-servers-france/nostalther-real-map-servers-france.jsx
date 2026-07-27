import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-servers-france');
}

export default function NostaltherRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-servers-france" />;
}
