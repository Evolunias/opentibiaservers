import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-events');
}

export default function InfernalOtEventsKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-events" />;
}
