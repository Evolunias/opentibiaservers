import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-server-latin-america');
}

export default function OriginaltibiaCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-server-latin-america" />;
}
