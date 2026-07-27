import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-events');
}

export default function RookgaardTalesEventsKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-events" />;
}
