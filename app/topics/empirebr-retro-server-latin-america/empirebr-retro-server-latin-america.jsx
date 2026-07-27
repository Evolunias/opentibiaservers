import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-retro-server-latin-america');
}

export default function EmpirebrRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-retro-server-latin-america" />;
}
