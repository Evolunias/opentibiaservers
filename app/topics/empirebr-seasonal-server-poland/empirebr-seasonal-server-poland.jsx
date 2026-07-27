import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-seasonal-server-poland');
}

export default function EmpirebrSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-seasonal-server-poland" />;
}
