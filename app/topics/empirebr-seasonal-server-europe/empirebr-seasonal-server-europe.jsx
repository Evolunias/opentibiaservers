import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-seasonal-server-europe');
}

export default function EmpirebrSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-seasonal-server-europe" />;
}
