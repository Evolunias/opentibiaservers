import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-retro-server-mexico');
}

export default function EmpirebrRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="empirebr-retro-server-mexico" />;
}
