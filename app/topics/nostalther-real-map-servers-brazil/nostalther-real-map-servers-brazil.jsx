import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-servers-brazil');
}

export default function NostaltherRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-servers-brazil" />;
}
