import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-server-germany');
}

export default function NostaltherRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-server-germany" />;
}
