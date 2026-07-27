import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-retro-server-south-america');
}

export default function EmpirebrRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-retro-server-south-america" />;
}
