import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-server-france');
}

export default function BlazeraRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-server-france" />;
}
