import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-servers-mexico');
}

export default function BlazeraCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-servers-mexico" />;
}
