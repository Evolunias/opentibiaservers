import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-servers-usa');
}

export default function TibianusRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-servers-usa" />;
}
