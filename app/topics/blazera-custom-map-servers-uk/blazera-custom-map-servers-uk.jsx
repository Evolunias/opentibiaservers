import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-servers-uk');
}

export default function BlazeraCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-servers-uk" />;
}
