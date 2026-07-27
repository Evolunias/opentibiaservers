import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-retro-server-argentina');
}

export default function EmpirebrRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-retro-server-argentina" />;
}
