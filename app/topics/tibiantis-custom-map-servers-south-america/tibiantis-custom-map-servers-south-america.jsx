import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-servers-south-america');
}

export default function TibiantisCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-servers-south-america" />;
}
