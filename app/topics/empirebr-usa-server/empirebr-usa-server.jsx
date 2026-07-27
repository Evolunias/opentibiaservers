import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-usa-server');
}

export default function EmpirebrUsaServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-usa-server" />;
}
