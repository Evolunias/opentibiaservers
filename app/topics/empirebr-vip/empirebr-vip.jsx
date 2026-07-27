import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-vip');
}

export default function EmpirebrVipKeywordPage() {
  return <StaticKeywordPage slug="empirebr-vip" />;
}
