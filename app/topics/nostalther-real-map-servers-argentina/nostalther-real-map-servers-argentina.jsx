import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-servers-argentina');
}

export default function NostaltherRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-servers-argentina" />;
}
