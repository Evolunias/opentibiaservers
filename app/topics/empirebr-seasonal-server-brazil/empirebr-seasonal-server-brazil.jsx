import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-seasonal-server-brazil');
}

export default function EmpirebrSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="empirebr-seasonal-server-brazil" />;
}
