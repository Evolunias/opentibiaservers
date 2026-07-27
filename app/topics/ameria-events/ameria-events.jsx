import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-events');
}

export default function AmeriaEventsKeywordPage() {
  return <StaticKeywordPage slug="ameria-events" />;
}
