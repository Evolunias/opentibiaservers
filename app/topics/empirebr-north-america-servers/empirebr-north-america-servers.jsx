import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-north-america-servers');
}

export default function EmpirebrNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-north-america-servers" />;
}
