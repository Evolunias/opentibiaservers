import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-server-uk');
}

export default function TibiantisCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-server-uk" />;
}
