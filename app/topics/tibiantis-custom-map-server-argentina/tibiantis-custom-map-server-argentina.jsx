import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-server-argentina');
}

export default function TibiantisCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-server-argentina" />;
}
