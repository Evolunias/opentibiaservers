import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-usa-servers');
}

export default function EmpirebrUsaServersKeywordPage() {
  return <StaticKeywordPage slug="empirebr-usa-servers" />;
}
