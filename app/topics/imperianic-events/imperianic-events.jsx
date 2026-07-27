import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-events');
}

export default function ImperianicEventsKeywordPage() {
  return <StaticKeywordPage slug="imperianic-events" />;
}
