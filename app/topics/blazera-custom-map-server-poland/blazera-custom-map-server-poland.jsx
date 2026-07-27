import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-server-poland');
}

export default function BlazeraCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-server-poland" />;
}
