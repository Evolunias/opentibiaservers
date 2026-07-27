import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-servers-france');
}

export default function BlazeraRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-servers-france" />;
}
