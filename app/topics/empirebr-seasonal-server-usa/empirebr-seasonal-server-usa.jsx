import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-seasonal-server-usa');
}

export default function EmpirebrSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-seasonal-server-usa" />;
}
