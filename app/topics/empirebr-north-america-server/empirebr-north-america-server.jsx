import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-north-america-server');
}

export default function EmpirebrNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-north-america-server" />;
}
