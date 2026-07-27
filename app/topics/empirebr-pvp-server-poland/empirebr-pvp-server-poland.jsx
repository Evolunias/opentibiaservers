import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-server-poland');
}

export default function EmpirebrPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-server-poland" />;
}
