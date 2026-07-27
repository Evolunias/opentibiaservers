import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-south-america-servers');
}

export default function EmpirebrSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-south-america-servers" />;
}
