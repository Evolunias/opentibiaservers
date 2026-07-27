import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-servers-canada');
}

export default function OriginaltibiaCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-servers-canada" />;
}
