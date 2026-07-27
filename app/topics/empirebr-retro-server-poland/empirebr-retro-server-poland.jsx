import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-retro-server-poland');
}

export default function EmpirebrRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-retro-server-poland" />;
}
