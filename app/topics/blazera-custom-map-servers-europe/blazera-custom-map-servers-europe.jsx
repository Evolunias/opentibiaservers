import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-servers-europe');
}

export default function BlazeraCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-servers-europe" />;
}
