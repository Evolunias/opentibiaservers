import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-ot-server');
}

export default function EmpirebrOtServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-ot-server" />;
}
