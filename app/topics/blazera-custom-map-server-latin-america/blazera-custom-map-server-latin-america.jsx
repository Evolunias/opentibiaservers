import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-server-latin-america');
}

export default function BlazeraCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-server-latin-america" />;
}
