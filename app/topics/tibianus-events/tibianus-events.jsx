import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-events');
}

export default function TibianusEventsKeywordPage() {
  return <StaticKeywordPage slug="tibianus-events" />;
}
