import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-retro-server-brazil');
}

export default function EmpirebrRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="empirebr-retro-server-brazil" />;
}
