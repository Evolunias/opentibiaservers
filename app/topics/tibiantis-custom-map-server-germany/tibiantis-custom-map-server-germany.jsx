import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-server-germany');
}

export default function TibiantisCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-server-germany" />;
}
