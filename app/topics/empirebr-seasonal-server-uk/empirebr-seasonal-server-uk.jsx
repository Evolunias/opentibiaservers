import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-seasonal-server-uk');
}

export default function EmpirebrSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="empirebr-seasonal-server-uk" />;
}
