import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-events');
}

export default function CanobEventsKeywordPage() {
  return <StaticKeywordPage slug="canob-events" />;
}
