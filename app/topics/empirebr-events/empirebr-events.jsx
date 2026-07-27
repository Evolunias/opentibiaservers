import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-events');
}

export default function EmpirebrEventsKeywordPage() {
  return <StaticKeywordPage slug="empirebr-events" />;
}
