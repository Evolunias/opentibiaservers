import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-events');
}

export default function SaintsotEventsKeywordPage() {
  return <StaticKeywordPage slug="saintsot-events" />;
}
