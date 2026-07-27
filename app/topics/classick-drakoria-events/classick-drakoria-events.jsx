import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-events');
}

export default function ClassickDrakoriaEventsKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-events" />;
}
