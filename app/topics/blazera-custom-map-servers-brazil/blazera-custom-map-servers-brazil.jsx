import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-servers-brazil');
}

export default function BlazeraCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-servers-brazil" />;
}
