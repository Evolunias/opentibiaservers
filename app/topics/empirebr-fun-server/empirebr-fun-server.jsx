import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-fun-server');
}

export default function EmpirebrFunServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-fun-server" />;
}
