import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-seasonal-server-argentina');
}

export default function EmpirebrSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-seasonal-server-argentina" />;
}
