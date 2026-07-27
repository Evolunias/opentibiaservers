import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-canada-servers');
}

export default function EmpirebrCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-canada-servers" />;
}
