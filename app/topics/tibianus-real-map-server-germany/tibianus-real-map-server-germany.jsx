import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-server-germany');
}

export default function TibianusRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-server-germany" />;
}
