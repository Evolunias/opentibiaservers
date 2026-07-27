import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-server-argentina');
}

export default function EmpirebrPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-server-argentina" />;
}
