import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-server-latin-america');
}

export default function OriginaltibiaRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-server-latin-america" />;
}
