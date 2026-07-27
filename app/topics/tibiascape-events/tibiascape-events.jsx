import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-events');
}

export default function TibiascapeEventsKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-events" />;
}
