import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-seasonal-server-canada');
}

export default function EmpirebrSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-seasonal-server-canada" />;
}
