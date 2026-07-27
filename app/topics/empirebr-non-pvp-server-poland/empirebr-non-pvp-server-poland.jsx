import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-non-pvp-server-poland');
}

export default function EmpirebrNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-non-pvp-server-poland" />;
}
