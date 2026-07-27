import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-events');
}

export default function OlderaEventsKeywordPage() {
  return <StaticKeywordPage slug="oldera-events" />;
}
