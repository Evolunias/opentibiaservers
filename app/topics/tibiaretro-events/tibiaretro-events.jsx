import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-events');
}

export default function TibiaretroEventsKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-events" />;
}
