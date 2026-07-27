import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-events');
}

export default function RealestaEventsKeywordPage() {
  return <StaticKeywordPage slug="realesta-events" />;
}
