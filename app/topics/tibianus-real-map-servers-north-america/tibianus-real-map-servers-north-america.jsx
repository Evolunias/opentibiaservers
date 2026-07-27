import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-servers-north-america');
}

export default function TibianusRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-servers-north-america" />;
}
