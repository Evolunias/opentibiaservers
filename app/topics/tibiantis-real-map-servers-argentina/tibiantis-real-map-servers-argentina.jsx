import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-servers-argentina');
}

export default function TibiantisRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-servers-argentina" />;
}
