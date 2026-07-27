import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-seasonal-server-france');
}

export default function EmpirebrSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="empirebr-seasonal-server-france" />;
}
