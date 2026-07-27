import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-events');
}

export default function RubinotEventsKeywordPage() {
  return <StaticKeywordPage slug="rubinot-events" />;
}
