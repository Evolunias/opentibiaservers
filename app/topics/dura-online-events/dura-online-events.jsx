import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-events');
}

export default function DuraOnlineEventsKeywordPage() {
  return <StaticKeywordPage slug="dura-online-events" />;
}
