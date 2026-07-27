import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-events');
}

export default function NostaltherEventsKeywordPage() {
  return <StaticKeywordPage slug="nostalther-events" />;
}
