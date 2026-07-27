import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-client');
}

export default function EmpirebrClientKeywordPage() {
  return <StaticKeywordPage slug="empirebr-client" />;
}
