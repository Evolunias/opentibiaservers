import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-server-europe');
}

export default function EmpirebrPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-server-europe" />;
}
