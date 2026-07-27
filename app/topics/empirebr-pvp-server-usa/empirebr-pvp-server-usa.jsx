import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-server-usa');
}

export default function EmpirebrPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-server-usa" />;
}
