import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-seasonal-server-south-america');
}

export default function OlderaSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-seasonal-server-south-america" />;
}
