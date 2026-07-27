import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-retro-server-sweden');
}

export default function EmpirebrRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-retro-server-sweden" />;
}
