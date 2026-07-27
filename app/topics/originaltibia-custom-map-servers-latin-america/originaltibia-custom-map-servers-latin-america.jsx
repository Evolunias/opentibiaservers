import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-servers-latin-america');
}

export default function OriginaltibiaCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-servers-latin-america" />;
}
