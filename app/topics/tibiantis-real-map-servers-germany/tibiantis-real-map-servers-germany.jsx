import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-servers-germany');
}

export default function TibiantisRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-servers-germany" />;
}
