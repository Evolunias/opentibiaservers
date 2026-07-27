import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-events');
}

export default function TibiantisEventsKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-events" />;
}
