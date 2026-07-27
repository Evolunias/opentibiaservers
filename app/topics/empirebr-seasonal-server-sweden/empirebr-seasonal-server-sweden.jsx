import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-seasonal-server-sweden');
}

export default function EmpirebrSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-seasonal-server-sweden" />;
}
