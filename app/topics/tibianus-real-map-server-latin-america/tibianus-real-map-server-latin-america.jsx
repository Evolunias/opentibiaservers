import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-server-latin-america');
}

export default function TibianusRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-server-latin-america" />;
}
