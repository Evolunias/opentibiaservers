import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-events');
}

export default function CalmeraOtEventsKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-events" />;
}
