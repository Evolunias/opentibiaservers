import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-servers-uk');
}

export default function TibiantisCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-servers-uk" />;
}
