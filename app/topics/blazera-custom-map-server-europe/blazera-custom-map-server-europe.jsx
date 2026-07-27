import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-server-europe');
}

export default function BlazeraCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-server-europe" />;
}
