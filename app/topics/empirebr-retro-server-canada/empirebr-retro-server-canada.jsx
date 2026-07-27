import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-retro-server-canada');
}

export default function EmpirebrRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-retro-server-canada" />;
}
