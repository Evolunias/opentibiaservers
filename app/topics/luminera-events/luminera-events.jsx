import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-events');
}

export default function LumineraEventsKeywordPage() {
  return <StaticKeywordPage slug="luminera-events" />;
}
