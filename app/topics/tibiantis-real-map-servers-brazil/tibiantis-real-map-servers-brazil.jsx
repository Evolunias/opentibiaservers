import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-servers-brazil');
}

export default function TibiantisRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-servers-brazil" />;
}
