import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-events');
}

export default function TibiaoriginsEventsKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-events" />;
}
