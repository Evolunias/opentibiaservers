import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-events');
}

export default function OtmadnessEventsKeywordPage() {
  return <StaticKeywordPage slug="otmadness-events" />;
}
