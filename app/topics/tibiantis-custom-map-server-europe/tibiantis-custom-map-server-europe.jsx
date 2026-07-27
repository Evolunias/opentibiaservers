import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-server-europe');
}

export default function TibiantisCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-server-europe" />;
}
