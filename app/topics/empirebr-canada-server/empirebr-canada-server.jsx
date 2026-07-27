import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-canada-server');
}

export default function EmpirebrCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-canada-server" />;
}
