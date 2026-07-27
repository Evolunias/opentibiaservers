import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-seasonal-server-germany');
}

export default function EmpirebrSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-seasonal-server-germany" />;
}
