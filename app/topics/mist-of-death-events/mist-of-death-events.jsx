import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-events');
}

export default function MistOfDeathEventsKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-events" />;
}
