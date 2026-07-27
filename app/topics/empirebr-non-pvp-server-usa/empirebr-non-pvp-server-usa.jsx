import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-non-pvp-server-usa');
}

export default function EmpirebrNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-non-pvp-server-usa" />;
}
