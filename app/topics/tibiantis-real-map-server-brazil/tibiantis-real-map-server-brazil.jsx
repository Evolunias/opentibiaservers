import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-server-brazil');
}

export default function TibiantisRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-server-brazil" />;
}
