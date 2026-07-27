import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-servers-latin-america');
}

export default function BlazeraCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-servers-latin-america" />;
}
