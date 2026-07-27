import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-status');
}

export default function EmpirebrStatusKeywordPage() {
  return <StaticKeywordPage slug="empirebr-status" />;
}
