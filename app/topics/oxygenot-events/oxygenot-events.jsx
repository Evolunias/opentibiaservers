import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-events');
}

export default function OxygenotEventsKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-events" />;
}
