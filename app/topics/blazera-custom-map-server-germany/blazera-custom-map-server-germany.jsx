import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-server-germany');
}

export default function BlazeraCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-server-germany" />;
}
