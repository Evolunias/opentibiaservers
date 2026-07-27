import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-seasonal-server-south-america');
}

export default function ElderaSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-seasonal-server-south-america" />;
}
