import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-server-germany');
}

export default function TibiantisRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-server-germany" />;
}
