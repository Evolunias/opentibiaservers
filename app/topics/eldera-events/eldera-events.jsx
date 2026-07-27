import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-events');
}

export default function ElderaEventsKeywordPage() {
  return <StaticKeywordPage slug="eldera-events" />;
}
