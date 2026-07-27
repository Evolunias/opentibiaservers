import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-events');
}

export default function KasteriaEventsKeywordPage() {
  return <StaticKeywordPage slug="kasteria-events" />;
}
