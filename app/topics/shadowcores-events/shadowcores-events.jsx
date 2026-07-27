import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-events');
}

export default function ShadowcoresEventsKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-events" />;
}
