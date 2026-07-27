import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-events');
}

export default function ClassicusEventsKeywordPage() {
  return <StaticKeywordPage slug="classicus-events" />;
}
