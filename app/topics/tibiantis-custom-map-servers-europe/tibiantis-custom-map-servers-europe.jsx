import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-servers-europe');
}

export default function TibiantisCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-servers-europe" />;
}
