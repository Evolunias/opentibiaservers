import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-south-america-server');
}

export default function EmpirebrSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-south-america-server" />;
}
