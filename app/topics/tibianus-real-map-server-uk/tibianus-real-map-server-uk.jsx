import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-server-uk');
}

export default function TibianusRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-server-uk" />;
}
