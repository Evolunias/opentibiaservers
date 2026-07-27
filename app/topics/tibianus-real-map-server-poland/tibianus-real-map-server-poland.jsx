import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-server-poland');
}

export default function TibianusRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-server-poland" />;
}
