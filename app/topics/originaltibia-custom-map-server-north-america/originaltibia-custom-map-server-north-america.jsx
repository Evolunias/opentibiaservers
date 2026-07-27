import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-server-north-america');
}

export default function OriginaltibiaCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-server-north-america" />;
}
