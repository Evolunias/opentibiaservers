import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-events');
}

export default function EvoleraEventsKeywordPage() {
  return <StaticKeywordPage slug="evolera-events" />;
}
