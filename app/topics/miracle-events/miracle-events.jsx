import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-events');
}

export default function MiracleEventsKeywordPage() {
  return <StaticKeywordPage slug="miracle-events" />;
}
