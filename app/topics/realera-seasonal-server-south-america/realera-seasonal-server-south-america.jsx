import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-seasonal-server-south-america');
}

export default function RealeraSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-seasonal-server-south-america" />;
}
