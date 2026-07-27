import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-non-pvp-server-argentina');
}

export default function EmpirebrNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-non-pvp-server-argentina" />;
}
