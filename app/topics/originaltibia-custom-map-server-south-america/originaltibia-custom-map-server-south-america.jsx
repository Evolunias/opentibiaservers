import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-server-south-america');
}

export default function OriginaltibiaCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-server-south-america" />;
}
