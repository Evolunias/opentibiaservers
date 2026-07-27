import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-servers-germany');
}

export default function TibijkaRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-servers-germany" />;
}
