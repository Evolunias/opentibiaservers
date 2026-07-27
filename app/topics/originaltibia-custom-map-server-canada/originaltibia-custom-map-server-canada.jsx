import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-server-canada');
}

export default function OriginaltibiaCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-server-canada" />;
}
