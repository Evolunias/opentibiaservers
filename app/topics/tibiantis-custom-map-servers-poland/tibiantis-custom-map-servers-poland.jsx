import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-servers-poland');
}

export default function TibiantisCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-servers-poland" />;
}
