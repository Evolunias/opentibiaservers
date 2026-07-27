import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-non-pvp-server-europe');
}

export default function EmpirebrNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-non-pvp-server-europe" />;
}
