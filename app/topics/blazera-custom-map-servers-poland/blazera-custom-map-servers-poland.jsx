import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-servers-poland');
}

export default function BlazeraCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-servers-poland" />;
}
