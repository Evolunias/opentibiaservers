import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-events');
}

export default function HarmoniaOtEventsKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-events" />;
}
