import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-servers-canada');
}

export default function TibianusRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-servers-canada" />;
}
