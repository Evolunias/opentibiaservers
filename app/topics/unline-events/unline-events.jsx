import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-events');
}

export default function UnlineEventsKeywordPage() {
  return <StaticKeywordPage slug="unline-events" />;
}
