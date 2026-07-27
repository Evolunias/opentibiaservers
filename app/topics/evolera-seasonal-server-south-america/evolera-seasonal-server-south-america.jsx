import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-seasonal-server-south-america');
}

export default function EvoleraSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-seasonal-server-south-america" />;
}
