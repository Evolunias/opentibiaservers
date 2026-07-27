import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-servers-germany');
}

export default function BlazeraCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-servers-germany" />;
}
