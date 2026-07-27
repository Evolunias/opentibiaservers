import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-servers-germany');
}

export default function TibianusRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-servers-germany" />;
}
