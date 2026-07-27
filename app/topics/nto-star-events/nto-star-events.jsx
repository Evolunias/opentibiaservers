import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-events');
}

export default function NtoStarEventsKeywordPage() {
  return <StaticKeywordPage slug="nto-star-events" />;
}
