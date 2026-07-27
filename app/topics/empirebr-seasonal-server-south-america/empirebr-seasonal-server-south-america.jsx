import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-seasonal-server-south-america');
}

export default function EmpirebrSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-seasonal-server-south-america" />;
}
