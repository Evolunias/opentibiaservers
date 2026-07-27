import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-events');
}

export default function AureraGlobalEventsKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-events" />;
}
