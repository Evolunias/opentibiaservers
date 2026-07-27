import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-events');
}

export default function RealeraEventsKeywordPage() {
  return <StaticKeywordPage slug="realera-events" />;
}
