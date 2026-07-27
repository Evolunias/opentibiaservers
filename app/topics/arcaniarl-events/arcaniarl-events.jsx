import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-events');
}

export default function ArcaniarlEventsKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-events" />;
}
