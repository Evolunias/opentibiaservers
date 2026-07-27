import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-high-exp');
}

export default function EmpirebrHighExpKeywordPage() {
  return <StaticKeywordPage slug="empirebr-high-exp" />;
}
