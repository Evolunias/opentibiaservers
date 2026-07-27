import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-events');
}

export default function NilotEventsKeywordPage() {
  return <StaticKeywordPage slug="nilot-events" />;
}
