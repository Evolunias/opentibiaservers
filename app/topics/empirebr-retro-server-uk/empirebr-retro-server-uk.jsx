import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-retro-server-uk');
}

export default function EmpirebrRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="empirebr-retro-server-uk" />;
}
