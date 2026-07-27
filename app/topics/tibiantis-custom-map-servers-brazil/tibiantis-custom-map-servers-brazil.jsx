import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-servers-brazil');
}

export default function TibiantisCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-servers-brazil" />;
}
