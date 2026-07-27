import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-server-canada');
}

export default function TibianusRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-server-canada" />;
}
