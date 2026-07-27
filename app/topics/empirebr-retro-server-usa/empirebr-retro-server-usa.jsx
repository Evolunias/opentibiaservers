import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-retro-server-usa');
}

export default function EmpirebrRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-retro-server-usa" />;
}
