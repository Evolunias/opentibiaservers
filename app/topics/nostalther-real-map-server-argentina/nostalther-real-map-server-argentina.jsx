import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-server-argentina');
}

export default function NostaltherRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-server-argentina" />;
}
