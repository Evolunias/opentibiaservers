import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-server-europe');
}

export default function TibianusRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-server-europe" />;
}
