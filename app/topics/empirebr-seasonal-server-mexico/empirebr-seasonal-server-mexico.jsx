import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-seasonal-server-mexico');
}

export default function EmpirebrSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="empirebr-seasonal-server-mexico" />;
}
