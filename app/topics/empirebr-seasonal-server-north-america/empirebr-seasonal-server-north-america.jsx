import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-seasonal-server-north-america');
}

export default function EmpirebrSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-seasonal-server-north-america" />;
}
