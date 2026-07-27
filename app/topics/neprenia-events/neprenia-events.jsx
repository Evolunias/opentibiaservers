import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-events');
}

export default function NepreniaEventsKeywordPage() {
  return <StaticKeywordPage slug="neprenia-events" />;
}
