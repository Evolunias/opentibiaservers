import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-events');
}

export default function DemolidoresEventsKeywordPage() {
  return <StaticKeywordPage slug="demolidores-events" />;
}
