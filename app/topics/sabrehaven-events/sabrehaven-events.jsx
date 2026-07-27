import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-events');
}

export default function SabrehavenEventsKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-events" />;
}
