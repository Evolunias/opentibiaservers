import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-retro-server-north-america');
}

export default function EmpirebrRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-retro-server-north-america" />;
}
