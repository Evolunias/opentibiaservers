import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-servers-latin-america');
}

export default function TibianusRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-servers-latin-america" />;
}
