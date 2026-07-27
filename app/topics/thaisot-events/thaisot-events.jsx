import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-events');
}

export default function ThaisotEventsKeywordPage() {
  return <StaticKeywordPage slug="thaisot-events" />;
}
