import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-server-poland');
}

export default function TibiantisCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-server-poland" />;
}
