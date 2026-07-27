import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-events');
}

export default function TibiaraEventsKeywordPage() {
  return <StaticKeywordPage slug="tibiara-events" />;
}
