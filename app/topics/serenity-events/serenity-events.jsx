import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-events');
}

export default function SerenityEventsKeywordPage() {
  return <StaticKeywordPage slug="serenity-events" />;
}
