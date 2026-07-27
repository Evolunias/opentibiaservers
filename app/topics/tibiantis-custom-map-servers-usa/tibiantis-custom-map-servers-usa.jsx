import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-servers-usa');
}

export default function TibiantisCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-servers-usa" />;
}
