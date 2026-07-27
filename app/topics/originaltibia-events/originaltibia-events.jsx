import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-events');
}

export default function OriginaltibiaEventsKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-events" />;
}
