import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-events');
}

export default function MediviaEventsKeywordPage() {
  return <StaticKeywordPage slug="medivia-events" />;
}
