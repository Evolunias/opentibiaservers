import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-events');
}

export default function CarlinotEventsKeywordPage() {
  return <StaticKeywordPage slug="carlinot-events" />;
}
