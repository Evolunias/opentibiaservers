import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-events');
}

export default function TrashformersEventsKeywordPage() {
  return <StaticKeywordPage slug="trashformers-events" />;
}
