import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-events');
}

export default function MadnessaliveEventsKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-events" />;
}
