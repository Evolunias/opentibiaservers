import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-servers-latin-america');
}

export default function OriginaltibiaRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-servers-latin-america" />;
}
