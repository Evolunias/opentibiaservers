import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-servers-north-america');
}

export default function OriginaltibiaCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-servers-north-america" />;
}
