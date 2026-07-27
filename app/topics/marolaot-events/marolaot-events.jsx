import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-events');
}

export default function MarolaotEventsKeywordPage() {
  return <StaticKeywordPage slug="marolaot-events" />;
}
