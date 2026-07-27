import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-events');
}

export default function RuthlessChaosEventsKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-events" />;
}
