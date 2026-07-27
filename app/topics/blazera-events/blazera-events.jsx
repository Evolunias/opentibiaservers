import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-events');
}

export default function BlazeraEventsKeywordPage() {
  return <StaticKeywordPage slug="blazera-events" />;
}
