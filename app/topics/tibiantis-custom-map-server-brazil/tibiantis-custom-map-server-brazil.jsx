import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-server-brazil');
}

export default function TibiantisCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-server-brazil" />;
}
