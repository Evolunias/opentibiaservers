import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-events');
}

export default function EvoluniaEventsKeywordPage() {
  return <StaticKeywordPage slug="evolunia-events" />;
}
