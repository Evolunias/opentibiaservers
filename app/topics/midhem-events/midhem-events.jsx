import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-events');
}

export default function MidhemEventsKeywordPage() {
  return <StaticKeywordPage slug="midhem-events" />;
}
