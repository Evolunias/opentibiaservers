import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-server-brazil');
}

export default function NostaltherRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-server-brazil" />;
}
