import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-seasonal-server-south-america');
}

export default function OriginaltibiaSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-seasonal-server-south-america" />;
}
