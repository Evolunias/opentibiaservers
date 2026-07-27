import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-bosses');
}

export default function EmpirebrBossesKeywordPage() {
  return <StaticKeywordPage slug="empirebr-bosses" />;
}
