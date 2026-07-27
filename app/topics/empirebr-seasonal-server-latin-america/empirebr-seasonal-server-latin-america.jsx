import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-seasonal-server-latin-america');
}

export default function EmpirebrSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-seasonal-server-latin-america" />;
}
