import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-retro-server-europe');
}

export default function EmpirebrRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-retro-server-europe" />;
}
