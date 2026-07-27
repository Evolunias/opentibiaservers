import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-server-uk');
}

export default function BlazeraCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-server-uk" />;
}
