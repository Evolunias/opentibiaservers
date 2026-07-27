import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-events');
}

export default function TibiameEventsKeywordPage() {
  return <StaticKeywordPage slug="tibiame-events" />;
}
