import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-retro-server-germany');
}

export default function EmpirebrRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-retro-server-germany" />;
}
