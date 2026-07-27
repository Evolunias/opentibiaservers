import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-events');
}

export default function TibijkaEventsKeywordPage() {
  return <StaticKeywordPage slug="tibijka-events" />;
}
