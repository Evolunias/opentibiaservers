import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-servers-south-america');
}

export default function OriginaltibiaCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-servers-south-america" />;
}
